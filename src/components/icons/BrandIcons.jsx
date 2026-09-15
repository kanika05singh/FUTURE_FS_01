// Small local brand icons for GitHub and LinkedIn.
// lucide-react removed brand/logo icons from its set, so these two are
// kept as lightweight inline SVGs (sized and colored the same way the
// lucide icons are used elsewhere: a `size` prop + currentColor fill).

export function GithubIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.02 3.29 9.28 7.86
        10.78.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7
        1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69
        0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79
        0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7
        5.4-5.27 5.68.42.36.78 1.08.78 2.18 0 1.57-.02 2.83-.02 3.22 0 .31.21.67.8.55A10.53 10.53 0 0 0
        23.5 12.03C23.5 5.74 18.27.5 12 .5Z"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86
        0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.4v1.56h.05c.48-.9 1.64-1.85
        3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34
        7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12
        20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0
        1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78
        1.78-1.73V1.73C24 .78 23.2 0 22.22 0Z"
      />
    </svg>
  );
}
