module.exports = {
  title: "ng-conf CFP",
  votingStages: {
    'stage_1': {
      label: 'First Voting Round',
      voteUI: [
        { label: 'nope', value: 0 },
        { label: 'seen better', value: 2 },
        { label: 'maybe', value: 4 },
        { label: 'absolutely', value: 8 },
      ],
    },
    'stage_2': {
      label: 'Final Round',
      voteUI: [
        { label: 'nope', value: 1 },
        { label: 'like', value: 2 },
        { label: 'LOVE', value: 3 }
      ]
    }
  },
}
