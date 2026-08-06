# Lianor website redesign: structure and rationale

## Strategic decision

The site now presents Lianor primarily as a local owner-side coordination service for international property owners in Genoa and Liguria. Property setup is the easiest entry service, renovation coordination is the higher-value project service, and continuing property coordination creates a route to recurring revenue.

Hospitality communication remains a credible secondary line. Corporate events and other projects remain available on a separate, deliberately low-prominence page rather than sharing the main identity of the company.

## Final sitemap

### English

- `/`: primary owner-facing homepage
- `/property-setup/`: post-purchase setup and handover
- `/renovation-coordination/`: owner-side renovation coordination
- `/ongoing-property-coordination/`: defined recurring service for absentee owners
- `/for-professionals/`: referral and collaboration model for agencies and property professionals
- `/hospitality-communication/`: English training and communication systems for hospitality teams
- `/other-projects/`: selected events and international projects, intentionally not in the main navigation

### Italian

- `/it/`: Italian homepage
- `/it/preparazione-immobile/`
- `/it/coordinamento-ristrutturazione/`
- `/it/coordinamento-continuativo/`
- `/it/per-agenzie-e-professionisti/`
- `/it/comunicazione-hospitality/`
- `/it/altri-progetti/`

## Every structural change and why it was made

1. **The homepage changed from a two-business gateway to a property-first homepage.**
   The previous structure gave project coordination and hospitality English roughly equal weight. The new homepage answers one expensive client problem immediately: an international owner needs a clear local picture of what is happening to a property in Liguria.

2. **Generic project coordination was divided into three concrete property services.**
   “Project coordination” is too broad to help a visitor recognize whether Lianor is relevant. Property setup, renovation coordination and continuing coordination correspond to distinct moments in the owner lifecycle and can each be scoped, priced and tested separately.

3. **Property setup and handover became the first service in the sequence.**
   It is easier to start, less technically exposed than a major renovation and relevant even when a buyer purchases a property that is already habitable. It is also a natural first referral product for an estate agency.

4. **Renovation coordination remained prominent but was narrowed to an owner-side role.**
   The page preserves the strongest original project-management copy, including responsibilities, decision tracking, reporting and handover, while removing claims that could imply technical direction, inspection, certification or construction management.

5. **A separate continuing property coordination page was added.**
   This creates a clear path to recurring revenue without promising unlimited concierge availability. The page explains cadence, included visits, response expectations and separately charged extraordinary interventions.

6. **A dedicated page for agencies and professionals was added in both languages.**
   This reflects the most plausible route to market. It explains the referral model, the benefit to the agency and the exact separation between mediation, regulated professional work and Lianor’s operational role.

7. **Hospitality was retained but repositioned.**
   It no longer explains what Lianor fundamentally is. It now sits as a secondary business line linked by a coherent capability: improving communication with international clients. The service also expands beyond lessons into templates, procedures, service recovery and communication audits, while preserving practical English training.

8. **Events and other international projects were moved to a separate low-prominence page.**
   The service has not been deleted, but it is absent from the main navigation and footer. It remains available by direct URL and through the sitemap, but it is intentionally absent from the homepage, main navigation and footer. This preserves optionality without weakening the property positioning.

9. **English became the default language at `/`, with Italian under `/it/`.**
   The principal direct client is expected to be an English-speaking international owner, so the root homepage should speak to that visitor immediately. Italian pages are essential for local agencies, geometri, architects, contractors and other referral partners.

10. **Every substantive page has an English and Italian counterpart.**
    The translations are equivalent rather than mechanically literal. The English pages speak directly to owners abroad; the Italian pages use terminology that is clearer for local professionals and avoid the expression “supporto immobiliare.” Exact language counterparts are connected in the header.

11. **Language metadata was added.**
    Every paired page now contains canonical URLs and `hreflang` links for English, Italian and `x-default`. This helps search engines understand that the pages are language alternatives rather than duplicate content.

12. **The navigation was simplified around audience and priority.**
    The header now contains a For property owners dropdown, For professionals, Hospitality and a separate language dropdown that displays the current language. Contact remains the prominent email button. The homepage service cards are static summaries rather than repeated links.

13. **The footer was reduced to copyright only.**
    Every substantive page now ends with the same minimal copyright line and no navigational links.

14. **The contact model remains email-based.**
    No form, account system or new data collection was introduced. Each page uses a subject-specific email link so inquiries arrive with clearer intent.

15. **Old URLs were preserved through redirects.**
    `/project-coordination/` and its former `.html` version redirect to renovation coordination. `/formazione-inglese/` and its former `.html` version redirect to the new Italian hospitality page. This avoids dead links during the transition.

16. **The sitemap and robots file were updated.**
    The sitemap now includes all canonical clean URLs. Redirect pages are deliberately excluded.

17. **The visual system was not redesigned.**
    The existing fonts, colors, spacing, cards, masthead, responsive behavior, motion and logo treatment remain unchanged. The language control is a restrained EN/IT dropdown with a small chevron, and the browser icon now uses the transparent Lianor mark directly.

18. **The outdated social-preview wording was not reused in metadata.**
    The existing preview image described the old generic positioning. The new pages use the logo image for Open Graph previews instead, avoiding an inaccurate message without introducing a new visual style.

## Why the bilingual structure is not fully symmetrical in audience

Full page parity is useful because owners, advisors and partners may switch languages, share links across borders or work in mixed-language teams. The copy, however, is localized by audience. English leads with the owner’s remote-control problem; Italian gives slightly more prominence to professional roles, division of responsibility and collaboration.

This is more credible than forcing every page to use identical sentences for audiences who do not arrive with the same questions.

## Competitor lesson applied without imitation

XENIAhome presents a clear lifecycle from property acquisition to renovation and property management. The useful lesson is clarity of service architecture and direct problem framing. Lianor should not imitate its property-finder, technical, luxury-rental, negotiation, quality-control or 24/7 concierge claims. Lianor is earlier-stage, independent, narrower and deliberately positioned around structured communication, owner visibility and defined local follow-up.

## Deployment note

Upload the contents of this folder to the root of the GitHub Pages repository. Preserve the existing `CNAME` file and any domain configuration already present in the repository.
