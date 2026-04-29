import React, { useContext } from 'react';
import { ThemeContext } from './shared/theme/model/context/context';

export const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <header
      data-node-id="multi-header-root"
      data-kind="canvas"
      data-name="Header"
      data-component-id="multi-header-component"
      style={{
        width: "100%",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme?.colors?.sys?.surface ?? "#FFFFFF",
        color: theme?.colors?.sys?.onSurface ?? "#111111",
        fontSize: "20px",
        fontWeight: "700",
      }}
    >
      Welcome to Multi-Component
    </header>
  );
};

export const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer
      data-node-id="multi-footer-root"
      data-kind="canvas"
      data-name="Footer"
      data-component-id="multi-footer-component"
      style={{
        width: "100%",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme?.colors?.sys?.surface ?? "#EEEEEE",
        color: theme?.colors?.sys?.onSurface ?? "#666666",
        fontSize: "14px",
      }}
    >
      <span data-node-id="multi-footer-text">© 2026 — sibling component in same file</span>
    </footer>
  );
};

export const LoginForm = () => {
  const theme = useContext(ThemeContext);
  const surface = theme?.colors?.sys?.surface ?? "#FFFFFF";
  const onSurface = theme?.colors?.sys?.onSurface ?? "#111111";
  const primary = theme?.colors?.sys?.primary ?? "#007AFF";

  return (
    <div
      data-node-id="multi-login-form-root"
      data-kind="canvas"
      data-name="LoginForm"
      data-component-id="multi-login-form-component"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "32px",
        alignItems: "stretch",
        backgroundColor: surface,
        color: onSurface,
        fontSize: "14px",
        maxWidth: "420px",
      }}
    >
      <h2
        data-node-id="multi-login-form-title"
        data-kind="element"
        data-name="Title"
        style={{
          fontSize: "24px",
          fontWeight: "700",
          margin: "0 0 8px 0",
        }}
      >
        Sign In
      </h2>

      <label
        data-node-id="multi-login-form-email-label"
        data-kind="element"
        data-name="EmailLabel"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontSize: "12px",
          color: onSurface,
        }}
      >
        Email
        <input
          data-node-id="multi-login-form-email-input"
          data-kind="element"
          data-name="EmailInput"
          type="text"
          value="user@example.com"
          placeholder="email@example.com"
          style={{
            width: "100%",
            height: "40px",
            padding: "0 12px",
            border: "1px solid #DDDDDD",
            borderRadius: "8px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            color: onSurface,
          }}
        />
      </label>

      <label
        data-node-id="multi-login-form-password-label"
        data-kind="element"
        data-name="PasswordLabel"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontSize: "12px",
          color: onSurface,
        }}
      >
        Password
        <input
          data-node-id="multi-login-form-password-input"
          data-kind="element"
          data-name="PasswordInput"
          type="password"
          value="secret123"
          placeholder="••••••••"
          style={{
            width: "100%",
            height: "40px",
            padding: "0 12px",
            border: "1px solid #DDDDDD",
            borderRadius: "8px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            color: onSurface,
          }}
        />
      </label>

      <label
        data-node-id="multi-login-form-remember-label"
        data-kind="element"
        data-name="RememberLabel"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: onSurface,
          cursor: "pointer",
        }}
      >
        <input
          data-node-id="multi-login-form-remember-checkbox"
          data-kind="element"
          data-name="RememberCheckbox"
          type="checkbox"
          checked={false}
          style={{
            width: "16px",
            height: "16px",
            margin: "0",
            accentColor: primary,
          }}
        />
        Remember me
      </label>

      <label
        data-node-id="multi-login-form-bio-label"
        data-kind="element"
        data-name="BioLabel"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          fontSize: "12px",
          color: onSurface,
        }}
      >
        Bio (optional)
        <textarea
          data-node-id="multi-login-form-bio-textarea"
          data-kind="element"
          data-name="BioTextarea"
          value="Tell us about yourself"
          rows={3}
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #DDDDDD",
            borderRadius: "8px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            color: onSurface,
            resize: "vertical",
          }}
        />
      </label>

      <button
        data-node-id="multi-login-form-submit"
        data-kind="element"
        data-name="SubmitButton"
        data-component-id="multi-login-form-component"
        style={{
          width: "100%",
          height: "44px",
          marginTop: "8px",
          backgroundColor: primary,
          color: "#FFFFFF",
          border: "none",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Sign In
      </button>
    </div>
  );
};
