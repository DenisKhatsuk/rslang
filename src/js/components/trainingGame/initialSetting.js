const currentDate = new Date();

const initialSettings = {
  training: {
    level: 1,
    round: 1,
    newWordsPerDay: 3,
    maxCardsPerDay: 3,
    date: currentDate,
    cardSettings: {
      showTranslation: true,
      showExplanationSentence: true,
      showExampleSentence: true,
      showTranscription: true,
      showAssociatedPicture: true
    },
    autoPronunciation: true,
    showSentencesTranslation: true,
    showIDontKnowButton: true,
    showDeleteButton: true,
    showHardButton: true,
    newWordsOnly: true,
    learnedWordsOnly: true,
  },
  audiocal: {
    level: 1,
    round: 1,
  },
  findWords: {
    level: 1,
    round: 1,
  },
  puzzle: {
    level: 1,
    round: 1,
  },
  speakit: {
    level: 1,
    round: 1,
  },
  savanna: {
    level: 1,
    round: 1,
  },
  sprint: {
    level: 1,
    round: 1,
  }
}

export default initialSettings;