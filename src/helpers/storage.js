// helpers to store or get information from localStorage

export const getVotes = email => localStorage.getItem(email);

export const saveVotes = (email, votes) => localStorage.setItem(email, votes);
