function add(numbers) {
    if (numbers === "") return 0;
    
    let delimiter = ',';
    let numberString = numbers;
    
    if (numbers.startsWith('//')) {
        delimiter = numbers[2];
        numberString = numbers.substring(4);
    }
    
    // Replace newlines with the actual delimiter, then split by that delimiter
    const nums = numberString.replace(/\n/g, delimiter).split(delimiter);
    const negatives = nums.filter(num => parseInt(num) < 0);
    
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };