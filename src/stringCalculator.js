function add(numbers) {
    if (numbers === "") return 0;
    
    let delimiter = ',';
    let numberString = numbers;
    
    if (numbers.startsWith('//')) {
        delimiter = numbers[2];
        numberString = numbers.substring(4);
    }
    
    const nums = numberString.replace(/\n/g, delimiter).split(delimiter);
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };