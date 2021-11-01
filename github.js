class GitHub {
    constructor() {
        this.client_id = 'e4982b821586a603c7cf';
        this.client_secret = 'ea299c1f7f75bcfed7e092fc98650c0c214ef28b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}