import { TerminalFormExperience, ASCIIArt } from "../components/terminal";

// Enhanced email validation function
const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return "❌ ERROR: Email address is required. Please try again.";
  }

  if (trimmedEmail.length < 5) {
    return "❌ ERROR: Email too short. Please enter a valid email address.";
  }

  if (!trimmedEmail.includes("@")) {
    return "❌ ERROR: Missing '@' symbol. Please enter a valid email (e.g., user@example.com).";
  }

  if (!trimmedEmail.includes(".")) {
    return "❌ ERROR: Missing domain extension. Please enter a valid email (e.g., user@example.com).";
  }

  if (trimmedEmail.startsWith("@") || trimmedEmail.endsWith("@")) {
    return "❌ ERROR: Invalid '@' placement. Please enter a valid email address.";
  }

  if (!emailRegex.test(trimmedEmail)) {
    return "❌ ERROR: Invalid email format. Please use format: user@example.com";
  }

  return null;
};

// Name validation function
const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return "Name is required.";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters long.";
  }
  return null;
};

// Message validation function
const validateMessage = (message: string): string | null => {
  if (!message.trim()) {
    return "Message is required.";
  }
  if (message.trim().length < 10) {
    return "Message must be at least 10 characters long.";
  }
  return null;
};

export function TerminalForm() {
  const formSteps = [
    {
      id: "banner",
      message: "Loading portfolio interface...",
      skipInput: true,
      variant: "system" as const,
    },
    {
      id: "greeting",
      message: "👋 Hello there! Welcome to my interactive terminal.",
      skipInput: true,
      variant: "info" as const,
    },
    {
      id: "intro",
      message:
        "I'm Gasser, a passionate developer ready to bring your ideas to life!",
      skipInput: true,
      variant: "success" as const,
    },
    {
      id: "system_check",
      message: "Initializing contact form... ✓",
      skipInput: true,
      variant: "system" as const,
    },
    {
      id: "connection_established",
      message: "Connection established ✓",
      skipInput: true,
      variant: "success" as const,
    },
    {
      id: "ready",
      message: "System ready! I'd love to connect with you.",
      skipInput: true,
      variant: "success" as const,
    },
    {
      id: "separator1",
      message: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      skipInput: true,
      variant: "system" as const,
    },
    {
      id: "name_prompt",
      message: "Let's start with the basics - what should I call you?",
      skipInput: true,
      variant: "default" as const,
    },
    {
      id: "name",
      message: "Please enter your name below:",
      inputPrompt: "→ ",
      inputPlaceholder: "Your full name",
      validation: validateName,
      variant: "default" as const,
    },
    {
      id: "email_prompt",
      message:
        "Great! Now I'll need your email address so I can get back to you.",
      skipInput: true,
      variant: "success" as const,
    },
    {
      id: "email",
      message: "Please enter your email:",
      inputPrompt: "→ ",
      inputPlaceholder: "your.email@example.com",
      validation: validateEmail,
      variant: "default" as const,
    },
    {
      id: "message_prompt",
      message: "Perfect! Finally, what would you like to tell me?",
      skipInput: true,
      variant: "success" as const,
    },
    {
      id: "message_hint",
      message:
        "💡 Feel free to share: project ideas, collaboration opportunities, job offers, or just say hello!",
      skipInput: true,
      variant: "warning" as const,
    },
    {
      id: "message",
      message: "Your message:",
      inputPrompt: "→ ",
      inputPlaceholder: "Type your message here...",
      validation: validateMessage,
      variant: "default" as const,
    },
  ];

  const handleFormComplete = (data: Record<string, string>) => {
    console.log("Form completed with data:", data);

    // Here you can handle the form data
    // For example, send it to your backend API
    // sendContactForm(data);

    // Or integrate with a service like EmailJS, Formspree, etc.
    // emailjs.send('service_id', 'template_id', data);
  };

  return (
    <div className="mt-20 mb-20">
      {/* ASCII Art Banner */}
      <div className="mb-8 flex justify-center">
        <ASCIIArt text="GASSER'S PORTFOLIO" delay={0} />
      </div>

      <TerminalFormExperience
        steps={formSteps}
        onComplete={handleFormComplete}
        welcomeDelay={2000} // Longer delay to let ASCII art display first
        className="max-w-5xl"
      />
    </div>
  );
}
