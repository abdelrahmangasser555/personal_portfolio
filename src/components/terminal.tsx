"use client";

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, MotionProps, useInView } from "motion/react";

import { cn } from "../lib/utils/cn";

interface SequenceContextValue {
  completeItem: (index: number) => void;
  activeIndex: number;
  sequenceStarted: boolean;
}

const SequenceContext = createContext<SequenceContextValue | null>(null);

const useSequence = () => useContext(SequenceContext);

const ItemIndexContext = createContext<number | null>(null);
const useItemIndex = () => useContext(ItemIndexContext);

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  startOnView?: boolean;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}: AnimatedSpanProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (!sequence.sequenceStarted) return;
    if (hasStarted) return;
    if (sequence.activeIndex === itemIndex) {
      setHasStarted(true);
    }
  }, [sequence?.activeIndex, sequence?.sequenceStarted, hasStarted, itemIndex]);

  const shouldAnimate = sequence ? hasStarted : startOnView ? isInView : true;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      onAnimationComplete={() => {
        if (!sequence) return;
        if (itemIndex === null) return;
        sequence.completeItem(itemIndex);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = useMemo(
    () =>
      motion.create(Component, {
        forwardMotionProps: true,
      }),
    [Component]
  );

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  const sequence = useSequence();
  const itemIndex = useItemIndex();

  useEffect(() => {
    if (sequence && itemIndex !== null) {
      if (!sequence.sequenceStarted) return;
      if (started) return;
      if (sequence.activeIndex === itemIndex) {
        setStarted(true);
      }
      return;
    }

    if (!startOnView) {
      const startTimeout = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(startTimeout);
    }

    if (!isInView) return;

    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [
    delay,
    startOnView,
    isInView,
    started,
    sequence?.activeIndex,
    sequence?.sequenceStarted,
    itemIndex,
  ]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        if (sequence && itemIndex !== null) {
          sequence.completeItem(itemIndex);
        }
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  sequence?: boolean;
  startOnView?: boolean;
}

export const Terminal = ({
  children,
  className,
  sequence = true,
  startOnView = true,
}: TerminalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const sequenceHasStarted = sequence ? !startOnView || isInView : false;

  const contextValue = useMemo<SequenceContextValue | null>(() => {
    if (!sequence) return null;
    return {
      completeItem: (index: number) => {
        setActiveIndex((current) =>
          index === current ? current + 1 : current
        );
      },
      activeIndex,
      sequenceStarted: sequenceHasStarted,
    };
  }, [sequence, activeIndex, sequenceHasStarted]);

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children;
    const array = Children.toArray(children);
    return array.map((child, index) => (
      <ItemIndexContext.Provider key={index} value={index}>
        {child as React.ReactNode}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequence]);

  const content = (
    <div
      ref={containerRef}
      className={cn(
        // Modern glassmorphic design
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40",
        "backdrop-blur-xl backdrop-saturate-150",
        "shadow-2xl shadow-black/25",
        // Modern terminal styling
        "w-full max-w-4xl min-h-[500px]",
        // Subtle glow effect
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none",
        // Inner shadow for depth
        "after:absolute after:inset-px after:rounded-2xl",
        "after:bg-gradient-to-br after:from-transparent after:to-black/10 after:pointer-events-none",
        className
      )}
    >
      {/* Terminal header with modern styling */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-4">
        <div className="flex items-center gap-3">
          {/* Modern traffic light buttons */}
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-sm hover:shadow-red-400/25 transition-shadow cursor-pointer"></div>
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-sm hover:shadow-yellow-400/25 transition-shadow cursor-pointer"></div>
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm hover:shadow-green-400/25 transition-shadow cursor-pointer"></div>
          </div>
          {/* Terminal title */}
          <div className="text-sm text-gray-300 font-medium">
            Terminal Contact Form
          </div>
        </div>
        {/* Terminal controls */}
        <div className="text-xs text-gray-500">⌘K to clear</div>
      </div>

      {/* Terminal content area */}
      <div className="relative z-10 p-6">
        <pre className="font-mono text-sm leading-relaxed">
          <code className="grid gap-y-3 overflow-auto text-gray-100">
            {wrappedChildren}
          </code>
        </pre>
      </div>
    </div>
  );

  if (!sequence) return content;

  return (
    <SequenceContext.Provider value={contextValue}>
      {content}
    </SequenceContext.Provider>
  );
};

interface TerminalInputProps {
  prompt?: string;
  placeholder?: string;
  onSubmit?: (value: string) => void;
  onValueChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  startOnView?: boolean;
  delay?: number;
}

export const TerminalInput = ({
  prompt = "> ",
  placeholder = "",
  onSubmit,
  onValueChange,
  className,
  disabled = false,
  autoFocus = true,
  startOnView = true,
  delay = 0,
}: TerminalInputProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  const sequence = useSequence();
  const itemIndex = useItemIndex();

  // Handle sequence timing
  useEffect(() => {
    if (!sequence || itemIndex === null) {
      if (!startOnView) {
        const startTimeout = setTimeout(() => setHasStarted(true), delay);
        return () => clearTimeout(startTimeout);
      }

      if (isInView) {
        const startTimeout = setTimeout(() => setHasStarted(true), delay);
        return () => clearTimeout(startTimeout);
      }
      return;
    }

    if (!sequence.sequenceStarted) return;
    if (hasStarted) return;
    if (sequence.activeIndex === itemIndex) {
      setHasStarted(true);
    }
  }, [
    sequence?.activeIndex,
    sequence?.sequenceStarted,
    hasStarted,
    itemIndex,
    delay,
    startOnView,
    isInView,
  ]);

  // Auto focus when component starts
  useEffect(() => {
    if (hasStarted && autoFocus && inputRef.current && !disabled) {
      const timer = setTimeout(() => {
        // todo auto focus when component starts
        // inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hasStarted, autoFocus, disabled]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onValueChange?.(newValue);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSubmit?.(value.trim());
      setValue("");

      // Complete sequence item if in sequence
      if (sequence && itemIndex !== null) {
        sequence.completeItem(itemIndex);
      }
    }
  };

  // Handle focus events
  const handleFocus = () => {
    setIsFocused(true);
    setShowCursor(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  if (!hasStarted) {
    return (
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: -5 }}
        className={cn("text-sm font-normal tracking-tight", className)}
      />
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("text-sm font-normal tracking-tight", className)}
    >
      <form onSubmit={handleSubmit} className="flex items-center group">
        <span className="text-emerald-400 mr-2 font-medium select-none">
          {prompt}
        </span>
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={placeholder}
            className={cn(
              "bg-transparent border-none outline-none text-gray-100 placeholder-gray-500",
              "font-mono text-sm tracking-tight w-full py-1",
              "transition-all duration-200",
              "focus:text-white focus:placeholder-gray-400",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            style={{ caretColor: "transparent" }}
          />
          {/* Custom blinking cursor */}
          {(isFocused || showCursor) && (
            <span
              className={cn(
                "absolute top-1 text-emerald-400 pointer-events-none font-mono font-bold",
                showCursor ? "opacity-100" : "opacity-0",
                "transition-opacity duration-150",
                "animate-pulse"
              )}
              style={{
                left: `${value.length * 0.6}em`,
              }}
            >
              ▊
            </span>
          )}
          {/* Input underline effect */}
          <div
            className={cn(
              "absolute bottom-0 left-0 h-px bg-gradient-to-r from-emerald-400/50 to-blue-400/50",
              "transition-all duration-300",
              isFocused ? "w-full opacity-100" : "w-0 opacity-0"
            )}
          />
        </div>
      </form>
    </motion.div>
  );
};

interface TerminalFormStep {
  id: string;
  message: string;
  inputPrompt?: string;
  inputPlaceholder?: string;
  validation?: (value: string) => string | null;
  skipInput?: boolean;
  variant?: "default" | "success" | "warning" | "error" | "info" | "system";
}

// Helper function to get message variant based on content
const getMessageVariant = (
  message: string,
  explicitVariant?: string
): string => {
  if (explicitVariant) {
    switch (explicitVariant) {
      case "success":
        return "text-emerald-400";
      case "warning":
        return "text-yellow-400";
      case "error":
        return "text-red-400";
      case "info":
        return "text-blue-400";
      case "system":
        return "text-cyan-400";
      default:
        return "text-gray-200";
    }
  }

  // Auto-detect variant based on message content
  if (
    message.includes("✓") ||
    message.includes("Success") ||
    message.includes("Perfect!") ||
    message.includes("Great!")
  ) {
    return "text-emerald-400";
  }
  if (
    message.includes("👋") ||
    message.includes("Welcome") ||
    message.includes("Hello")
  ) {
    return "text-cyan-300";
  }
  if (
    message.includes("💡") ||
    message.includes("Feel free") ||
    message.includes("Tip:")
  ) {
    return "text-yellow-300";
  }
  if (
    message.includes("Nice to meet you") ||
    message.includes("Awesome") ||
    message.includes("Amazing")
  ) {
    return "text-purple-300";
  }
  if (
    message.includes("Initializing") ||
    message.includes("System") ||
    message.includes("Loading")
  ) {
    return "text-blue-400";
  }
  if (
    message.includes("Error") ||
    message.includes("Failed") ||
    message.includes("❌")
  ) {
    return "text-red-400";
  }

  return "text-gray-200";
};

interface TerminalFormExperienceProps {
  steps: TerminalFormStep[];
  onComplete?: (data: Record<string, string>) => void;
  className?: string;
  welcomeDelay?: number;
}

// ASCII Art component for banner display
interface ASCIIArtProps {
  text: string;
  className?: string;
  delay?: number;
}

export const ASCIIArt = ({ text, className, delay = 0 }: ASCIIArtProps) => {
  const asciiArt = `
╔════════════════════════════════════════════════════════╗
║                                                        ║
║   ██████╗  █████╗ ███████╗███████╗███████╗██████╗      ║
║  ██╔════╝ ██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗     ║
║  ██║  ███╗███████║███████╗███████╗█████╗  ██████╔╝     ║
║  ██║   ██║██╔══██║╚════██║╚════██║██╔══╝  ██╔══██╗     ║
║  ╚██████╔╝██║  ██║███████║███████║███████╗██║  ██║     ║
║   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝     ║
║                                                        ║
║                 P O R T F O L I O                      ║
║                                                        ║
╚════════════════════════════════════════════════════════╝`;

  return (
    <TypingAnimation
      duration={1}
      delay={delay}
      className={cn(
        "text-cyan-400 font-mono text-xs leading-tight whitespace-pre",
        className
      )}
      startOnView={true}
    >
      {asciiArt}
    </TypingAnimation>
  );
};

export const TerminalFormExperience = ({
  steps,
  onComplete,
  className,
  welcomeDelay = 1000,
}: TerminalFormExperienceProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [displayedSteps, setDisplayedSteps] = useState<
    Array<{ step: TerminalFormStep; response?: string; error?: string }>
  >([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showDataSummary, setShowDataSummary] = useState(false);

  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex >= steps.length - 1;

  // Initialize first step and auto-advance through non-input steps
  useEffect(() => {
    const timer = setTimeout(() => {
      if (steps.length > 0) {
        processStepsUntilInput(0);
      }
    }, welcomeDelay);
    return () => clearTimeout(timer);
  }, [steps, welcomeDelay]);

  // Function to process steps until we reach one that requires input
  const processStepsUntilInput = (startIndex: number) => {
    let currentIndex = startIndex;
    const sequentialSteps: Array<{
      step: TerminalFormStep;
      response?: string;
      error?: string;
    }> = [];

    // Collect all sequential non-input steps
    while (currentIndex < steps.length && steps[currentIndex].skipInput) {
      sequentialSteps.push({ step: steps[currentIndex] });
      currentIndex++;
    }

    // Add the input step if it exists
    if (currentIndex < steps.length) {
      sequentialSteps.push({ step: steps[currentIndex] });
    }

    // Update state and start sequential display
    setCurrentStepIndex(currentIndex);
    displayStepsSequentially(sequentialSteps);
  };

  // Function to personalize messages with user's name
  const personalizeSteps = (
    originalSteps: TerminalFormStep[],
    userData: Record<string, string>,
    fromIndex: number
  ): TerminalFormStep[] => {
    const userName = userData.name || "there";

    return originalSteps.map((step, index) => {
      if (index < fromIndex) return step;

      let personalizedMessage = step.message;

      // Personalize specific messages
      if (step.id === "email_prompt") {
        personalizedMessage = `Great! Nice to meet you, ${userName}! Now I'll need your email address so I can get back to you.`;
      } else if (step.id === "message_prompt") {
        personalizedMessage = `Perfect, ${userName}! Finally, what would you like to tell me?`;
      }

      return { ...step, message: personalizedMessage };
    });
  };

  // Function to process personalized steps
  const processStepsUntilInputPersonalized = (
    startIndex: number,
    personalizedSteps: TerminalFormStep[],
    userData: Record<string, string>
  ) => {
    let currentIndex = startIndex;
    const sequentialSteps: Array<{
      step: TerminalFormStep;
      response?: string;
      error?: string;
    }> = [];

    // Collect all sequential non-input steps
    while (
      currentIndex < personalizedSteps.length &&
      personalizedSteps[currentIndex].skipInput
    ) {
      sequentialSteps.push({ step: personalizedSteps[currentIndex] });
      currentIndex++;
    }

    // Add the input step if it exists
    if (currentIndex < personalizedSteps.length) {
      sequentialSteps.push({ step: personalizedSteps[currentIndex] });
    }

    // Update state and start sequential display
    setCurrentStepIndex(currentIndex);
    displayStepsSequentially(sequentialSteps);
  };

  // Function to display steps one by one, waiting for each to complete
  const displayStepsSequentially = (
    stepsToShow: Array<{
      step: TerminalFormStep;
      response?: string;
      error?: string;
    }>
  ) => {
    // Start with empty displayed steps
    setDisplayedSteps([]);

    // Add steps one by one with proper timing
    stepsToShow.forEach((stepItem, index) => {
      setTimeout(() => {
        setDisplayedSteps((prev) => [...prev, stepItem]);
      }, index * 1200); // Wait 1200ms between each message (time for typing + pause)
    });
  };

  const handleInputSubmit = (value: string) => {
    if (!currentStep || isComplete) return;

    // Validate input if validation function provided
    const error = currentStep.validation?.(value) || null;

    if (error) {
      // Update current step with error
      setDisplayedSteps((prev) =>
        prev.map((item, index) =>
          index === prev.length - 1 ? { ...item, error } : item
        )
      );
      return;
    }

    // Update form data
    const newFormData = { ...formData, [currentStep.id]: value };
    setFormData(newFormData);

    // Update current step with response
    setDisplayedSteps((prev) =>
      prev.map((item, index) =>
        index === prev.length - 1
          ? { ...item, response: value, error: undefined }
          : item
      )
    );

    if (isLastStep) {
      // Form is complete
      setIsComplete(true);
      // Show data summary after a brief delay
      setTimeout(() => {
        setShowDataSummary(true);
      }, 1000);
      onComplete?.(newFormData);
    } else {
      // Personalize next steps with user's name
      const nextIndex = currentStepIndex + 1;
      const personalizedSteps = personalizeSteps(steps, newFormData, nextIndex);

      setTimeout(() => {
        processStepsUntilInputPersonalized(
          nextIndex,
          personalizedSteps,
          newFormData
        );
      }, 600);
    }
  };

  const dismissError = () => {
    setDisplayedSteps((prev) =>
      prev.map((item, index) =>
        index === prev.length - 1 ? { ...item, error: undefined } : item
      )
    );
  };

  return (
    <Terminal className={cn("mx-auto", className)} sequence={false}>
      {displayedSteps.map((item, index) => (
        <div key={`${item.step.id}-${index}`}>
          {/* Display the step message */}
          <TypingAnimation
            duration={40}
            delay={0} // No delay since messages are added sequentially
            className={cn(
              "font-medium",
              getMessageVariant(item.step.message, item.step.variant)
            )}
            startOnView={false}
          >
            {item.step.message}
          </TypingAnimation>

          {/* Display user's response if provided */}
          {item.response && (
            <AnimatedSpan
              className="text-gray-100 bg-gray-800/30 rounded-md px-2 py-1 inline-block my-1"
              delay={200}
              startOnView={false}
            >
              <span className="text-emerald-400 font-medium">
                {item.step.inputPrompt || "> "}
              </span>
              <span className="text-white font-mono">{item.response}</span>
            </AnimatedSpan>
          )}

          {/* Display error if any */}
          {item.error && (
            <AnimatedSpan
              className="text-red-400 bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2 my-1 inline-block"
              delay={100}
              startOnView={false}
            >
              {item.error}
            </AnimatedSpan>
          )}

          {/* Show input for current step (if not the last displayed step with a response, and step needs input) */}
          {index === displayedSteps.length - 1 &&
            !item.response &&
            !item.step.skipInput &&
            !isComplete && (
              <TerminalInput
                prompt={item.step.inputPrompt}
                placeholder={item.step.inputPlaceholder}
                onSubmit={handleInputSubmit}
                delay={item.step.message.length * 40 + 300} // Wait for the message to finish typing + small pause
                startOnView={false}
                autoFocus={true}
              />
            )}
        </div>
      ))}

      {/* Completion messages */}
      {isComplete && (
        <>
          <TypingAnimation
            duration={30}
            delay={800}
            className="text-green-400"
            startOnView={false}
          >
            ✅ Form submitted successfully!
          </TypingAnimation>
          <TypingAnimation
            duration={40}
            delay={1500}
            className="text-blue-400"
            startOnView={false}
          >
            📧 Thank you for reaching out! I'll get back to you within 24 hours.
          </TypingAnimation>
        </>
      )}

      {/* Data Summary Display */}
      {showDataSummary && (
        <>
          <TypingAnimation
            duration={30}
            delay={0}
            className="text-cyan-400"
            startOnView={false}
          >
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </TypingAnimation>
          <TypingAnimation
            duration={40}
            delay={800}
            className="text-yellow-400"
            startOnView={false}
          >
            📋 SUBMISSION SUMMARY
          </TypingAnimation>
          <AnimatedSpan
            delay={1400}
            startOnView={false}
            className="text-gray-300 mt-2"
          >
            <div className="bg-gray-800/40 rounded-md p-3 border border-gray-600/30">
              <div className="grid gap-2">
                <div>
                  <span className="text-emerald-400">Name:</span>{" "}
                  <span className="text-white">{formData.name}</span>
                </div>
                <div>
                  <span className="text-emerald-400">Email:</span>{" "}
                  <span className="text-white">{formData.email}</span>
                </div>
                <div>
                  <span className="text-emerald-400">Message:</span>{" "}
                  <span className="text-white">{formData.message}</span>
                </div>
              </div>
            </div>
          </AnimatedSpan>
          <TypingAnimation
            duration={50}
            delay={2200}
            className="text-gray-400"
            startOnView={false}
          >
            Connection closed. Feel free to explore the rest of my portfolio! 🚀
          </TypingAnimation>
        </>
      )}
    </Terminal>
  );
};
