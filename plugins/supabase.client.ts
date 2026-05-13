// COMMENTED OUT FOR MVP - No Supabase needed
// import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
    // Mock supabase client for MVP - no real connection
    const mockSupabase = {
        auth: {
            signUp: () => Promise.resolve({ data: { user: null }, error: null }),
            signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
            signOut: () => Promise.resolve({ error: null }),
            getSession: () => Promise.resolve({ data: { session: null }, error: null }),
            onAuthStateChange: () => {
                return {
                    data: {
                        subscription: {
                            unsubscribe: () => { }
                        }
                    }
                }
            },
            resetPasswordForEmail: () => Promise.resolve({ data: null, error: null }),
            updateUser: () => Promise.resolve({ data: { user: null }, error: null })
        },
        from: () => ({
            select: () => Promise.resolve({ data: [], error: null }),
            insert: () => Promise.resolve({ data: null, error: null }),
            update: () => Promise.resolve({ data: null, error: null }),
            delete: () => Promise.resolve({ data: null, error: null })
        })
    }

    return {
        provide: {
            supabase: mockSupabase
        }
    }
})
