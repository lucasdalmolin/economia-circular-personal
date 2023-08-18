export function getTimeRemaining(endtime: Date | string): Record<string, number> {
    const t = Date.parse(endtime.toString()) - Date.parse(new Date().toString());
    return {
      'Total': t,
      'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
      'Hours': Math.floor((t / (1000 * 60 * 60)) % 24),
      'Minutes': Math.floor((t / 1000 / 60) % 60),
      'Seconds': Math.floor((t / 1000) % 60)
    };
  }
  
  export function getTime(): { Total: Date, Hours: number, Minutes: number, Seconds: number } {
    const t = new Date();
    return {
      'Total': t,
      'Hours': t.getHours() % 12,
      'Minutes': t.getMinutes(),
      'Seconds': t.getSeconds()
    };
  }
  