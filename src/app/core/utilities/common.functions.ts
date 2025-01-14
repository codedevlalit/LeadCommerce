export class CommonFunctions {
    
    static isNullOrUndefinedOrEmpty(value: string): boolean {
        return value === null || value === undefined || value.trim() === '';
    }
}