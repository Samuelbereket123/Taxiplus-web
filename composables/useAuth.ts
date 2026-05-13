// MVP VERSION - Mock authentication, no Supabase required
export const useAuth = () => {
    const user = useState('user', () => ({
        id: 'demo-user',
        email: 'demo@taxiplus.et',
        user_metadata: {
            full_name: 'Demo User',
            phone: '+251 91 234 5678'
        }
    }))
    const loading = useState('auth-loading', () => false)

    const signUp = async (email: string, password: string, metadata: any = {}) => {
        user.value = {
            id: 'demo-user',
            email,
            user_metadata: metadata
        }
        return { data: { user: user.value }, error: null }
    }

    const signIn = async (email: string, password: string) => {
        user.value = {
            id: 'demo-user',
            email,
            user_metadata: {
                full_name: 'Demo User',
                phone: '+251 91 234 5678'
            }
        }
        return { data: { user: user.value }, error: null }
    }

    const signOut = async () => {
        user.value = null
        return { error: null }
    }

    const resetPassword = async (email: string) => {
        return { data: {}, error: null }
    }

    const updatePassword = async (newPassword: string) => {
        return { data: {}, error: null }
    }

    const getSession = async () => {
        loading.value = false
        return null
    }

    const checkAuth = async () => {
        loading.value = false
    }

    return {
        user,
        loading,
        signUp,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
        getSession,
        checkAuth
    }
}
