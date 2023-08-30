const Score = (await chrome.storage.session.get(["Score"]))["Score"];
const _ScoreSynced = false;
///Increment the score and save it to storage
async function IncrementScore(change) {
    if(!_ScoreSynced)
        SyncScore();

    if(change === null || change === undefined || isNaN(change) || change < 0)
        change = 0; //Fix any bad input

    Score += change;
    await chrome.storage.session.set({ Score: Score});
}

///Decrement the score and save it to storage
async function DecrementScore(change) {
    if(!_ScoreSynced)
        SyncScore();

    if(change === null || change === undefined || isNaN(change) || change < 0)
        change = 0; //Fix any bad input

    Score -= change;
    await chrome.storage.session.set({ Score: Score});
}

///Get the score from storage
async function GetScore() {
    if(!_ScoreSynced)
        SyncScore();
    return Score;
}

async function SyncScore() {
    if(Score === undefined || Score === null || isNaN(Score)) //Fix incase an error happens
        Score = 0; 
    _ScoreSynced = true;
}