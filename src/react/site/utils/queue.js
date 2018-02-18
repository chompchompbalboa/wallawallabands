export const songsInQueue = (queue) => {
    if(typeof window !== "undefined") {
      if(typeof queue.active !== "undefined") {
        if(typeof queue.active.id !== "undefined") {
          return true
        }
      }
    }
    return false
}
