import posthog from 'posthog-js'

posthog.init('phc_V33zz2JuBa2fFZhsJmLsuWVJmBPQMCbLYG0S7KB77vD',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)