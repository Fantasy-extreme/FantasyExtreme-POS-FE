import { toast } from "react-toastify";
/**
 * Check if the user is connected with II
 * @param state The global authentication string
 * @returns {boolean}  
 */
export function isConnected(state: string): boolean {
    return state == 'initialized'
}
export function requireAuth(state: string): boolean {
    if (isConnected(state)) {
        return true;
    } else {
        toast.error('Please Connect with Internet Identity to perform this action', { autoClose: 3000 })
        return false
    }
}