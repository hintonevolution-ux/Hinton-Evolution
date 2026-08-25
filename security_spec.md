# Security Specification: Inquiry System

## Data Invariants
1. An inquiry must have a valid name (min 2 chars, max 100).
2. An inquiry must have a valid email format.
3. An inquiry must have a project type from the allowed list.
4. `createdAt` must be the server time.
5. Inquiries are append-only for public users (create-only).

## The "Dirty Dozen" Payloads (Expected: PERMISSION_DENIED)

1. **Identity Spoofing**: Attempt to set a custom `userId` during create.
2. **Resource Poisoning**: Large string for `name` (e.g. 2KB).
3. **Resource Poisoning**: Large string for `description` (e.g. 10KB).
4. **State Shortcutting**: Attempt to update an existing inquiry.
5. **State Shortcutting**: Attempt to delete an existing inquiry.
6. **Unauthorized Read**: Attempt to list all inquiries as a public user.
7. **Malicious ID**: Attempt to create a document with an extremely long ID.
8. **Invalid Enum**: `projectType` set to "Hacker Project".
9. **Invalid Type**: `budget` set to a number instead of a string.
10. **Temporal Manipulation**: Attempt to set `createdAt` to a past date.
11. **Shadow Field**: Adding `isVerified: true` to the payload.
12. **Null Bypass**: Sending a payload with missing required fields like `email`.
