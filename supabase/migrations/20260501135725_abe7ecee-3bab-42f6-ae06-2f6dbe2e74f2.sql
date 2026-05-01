-- Tighten the permissive WITH CHECK (true) policies on public-insert tables
-- by enforcing input shape validation. This still allows anonymous submissions
-- (required for the contact form and newsletter) but rejects garbage/abuse.

-- LEADS: replace permissive policy with validated one
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Anyone can submit a validated lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Required fields present and within sane bounds
  length(trim(name)) BETWEEN 1 AND 120
  AND length(trim(email)) BETWEEN 5 AND 254
  AND email ~* '^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$'
  -- Optional fields capped to prevent abuse
  AND (business IS NULL OR length(business) <= 200)
  AND (phone IS NULL OR length(phone) <= 40)
  AND (project_type IS NULL OR length(project_type) <= 100)
  AND (budget IS NULL OR length(budget) <= 100)
  AND (timeline IS NULL OR length(timeline) <= 100)
  AND (brief IS NULL OR length(brief) <= 5000)
);

-- SUBSCRIBERS: replace permissive policy with validated one
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.subscribers;

CREATE POLICY "Anyone can submit a validated subscription"
ON public.subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(email)) BETWEEN 5 AND 254
  AND email ~* '^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$'
);