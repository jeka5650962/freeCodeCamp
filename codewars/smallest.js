class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(null, args)
    }
}

const smallest = (arr) => Math.min.apply(null, arr)

console.log(smallest([34, 15, 88, 2]))