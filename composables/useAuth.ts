// STATIC VERSION - No backend needed
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

    const signUp = async () => {
        return { data: { user: user.value }, error: null }
    }

    const signIn = async () => {
        return { data: { user: user.value }, error: null }
    }

    const signOut = async () => {
        return { error: null }
    }

    const resetPassword = async () => {
        return { data: {}, error: null }
    }

    const updatePassword = async () => {
        return { data: {}, error: null }
    }

    const getSession = async () => {
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
