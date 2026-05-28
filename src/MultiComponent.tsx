import React from 'react';
import { sys } from './shared/theme';

export const Header = () => {
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
        backgroundColor: sys.color.surface,
        color: sys.color.onSurface,
        fontSize: "20px",
        fontWeight: "700",
      }}
    >
      Welcome to Multi-Component
    </header>
  );
};

export const Footer = () => {
  return (
    <footer
      data-kind="canvas"
      data-name="Footer"
      style={{
        width: "100%",
        padding: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: sys.color.surface,
        color: sys.color.onSurface,
        fontSize: "14px",
      }}
    >
      <span data-node-id="multi-footer-text">© 2026 — sibling component in same file</span>
    </footer>
  );
};

export const LoginForm = () => {
  return (
    <div
      data-kind="canvas"
      data-name="LoginForm"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "32px",
        alignItems: "stretch",
        backgroundColor: sys.color.surface,
        color: sys.color.onSurface,
        fontSize: "14px",
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
          color: sys.color.onSurface,
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
            borderRadius: sys.radius.md,
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            color: sys.color.onSurface,
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
          color: sys.color.onSurface,
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
            borderRadius: sys.radius.md,
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            color: sys.color.onSurface,
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
          color: sys.color.onSurface,
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
            accentColor: sys.color.primary,
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
          color: sys.color.onSurface,
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
            borderRadius: sys.radius.md,
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            color: sys.color.onSurface,
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
          backgroundColor: sys.color.primary,
          color: sys.color.onPrimary,
          border: "none",
          borderRadius: sys.radius.md,
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
