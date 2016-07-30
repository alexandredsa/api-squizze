var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var performanceSchema = new Schema({
        userId: Schema.Types.ObjectId,
        quizId: Schema.Types.ObjectId,
		bestScore: { type: Number, min: 0, max: 100, validate: [isValidScores, 'Best score should be higher than last score.']},
		lastScore: { type: Number, min: 0, max: 100}
}, {
    versionKey: false 
});

function isValidScores(){
	return this.bestScore > this.lastScore;
}

var Performance = mongoose.model('performance', performanceSchema);

module.exports = Performance;