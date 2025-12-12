# Plan: Fix Tally Popup Width for Two-Column Layout

The Tally form has been updated to a two-column layout, but the current popup embed is too narrow, causing visibility issues. We need to increase the width of the popup container.

## Proposed Changes

We will add the `data-tally-width` attribute to the Tally embed buttons. A width of **800px** is recommended for two-column forms to ensure adequate space for both columns and the submit button.

### 1. Update `src/components/Navbar.tsx`
- Locate the "Start My Reel" button with `data-tally-open="KYzkWg"`.
- Add `data-tally-width="800"`.

### 2. Update `src/App.tsx`
- Locate all instances of buttons with `data-tally-open="KYzkWg"`.
- Add `data-tally-width="800"` to each.

## Verification
- User to test the popup to ensure the form fits correctly.