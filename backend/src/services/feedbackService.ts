interface FeedbackEntry {
    name: string;
    feedback: string;
}

export class FeedbackService {
    private feedbackEntries: FeedbackEntry[] = [];

    getAllFeedback(): FeedbackEntry[] {
        return this.feedbackEntries;
    }

    addFeedback(entry: FeedbackEntry): void {
        this.feedbackEntries.push(entry);
    }
}
