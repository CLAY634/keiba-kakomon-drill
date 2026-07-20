Netlify Drop package: v55 home + stage1 data-separated SPA

This package is arranged for realistic public testing.

Entry point:
- index.html = original v52 home screen.

Stage pages:
- stage1.html = v55 data-separated SPA prototype using questions_data.js.
- stage2.html to stage10.html = original v52 split HTML pages.

Shared/support pages:
- beginner.html = はじめての方へ
- shindan.html = 診断ページ
- questions_data.js = stage1 question data for the SPA prototype

Important behavior:
- Opening the site root displays the original home screen.
- Clicking stage1 from the home screen opens the SPA prototype.
- Returning from stage1 points back to index.html.
- The previous temporary stage_select.html workaround is no longer used.


v56 diagnosis enhancement:
- shindan.html has been replaced with the enhanced public/share-oriented diagnosis page.
- index.html remains the original v52 home screen.
- stage1.html remains the v55 data-separated SPA prototype.
- stage2.html to stage10.html remain v52 split HTML pages.


v59 share redirect CTA:
- Type-specific share pages now include a large CTA button to the home page.
- They also auto-redirect to index.html after 5 seconds for human visitors.
- X/Twitter can still use the share page for the preview card image.
