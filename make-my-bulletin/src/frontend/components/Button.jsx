/**
 * 
 * @param professional - a button which asks if this bulletin board is a professional one!
 * @param affinity - a button which asks if this bulletin board is one relating to affinity
 * @param wellbeing - a button which asks if a bulletin board is one relating to wellbeing 
 * @param social - a button which asks if a bulletin board is one relating to social action
 * 
 */
export default function Button({professional, affinity, wellbeing, social}) {
    if (professional !== undefined) {
        return (
                <button>
                    {professional}
                </button>
        );
    } else if (affinity !== undefined) {
        return (
            <button>
                {affinity}
            </button>
        );
    } else if (wellbeing !== undefined) {
        return(
            <button>
                {wellbeing}
            </button>
        );
    } else if (social !== undefined) {
        return (
            <button>
                {social}
            </button>
        )
    }
}