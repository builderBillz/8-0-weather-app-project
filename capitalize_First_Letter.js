
        function capitalizeFirstLetter(words) {
            const wordsArray = words.split(" ")
            const newWords = []
            for (let word of wordsArray) {
                const newWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
                newWords.push(newWord)
            }
            return newWords.join(" ")
            // console.log(newWords)
        } 