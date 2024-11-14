export function parseCSV(csvText: string) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",");
  
  return lines.slice(1).map(line => {
    const values = line.split(",");
    const obj: any = {};
    
    headers.forEach((header, index) => {
      const value = values[index];
      if (header === "chatsDate") {
        // Handle date in format "Fri Nov 08 2024"
        obj[header] = new Date(value);
      } else {
        obj[header] = isNaN(Number(value)) ? value : Number(value);
      }
    });
    
    return obj;
  });
}