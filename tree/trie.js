class TrieNode {

    let isEnd;
    TrieNode[] children;

    TrieNode() {
        isEnd = false;
        children = new TrieNode[26];
    }
}

class Trie {

    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode current = root;
        for (char c : word.toCharArray()) {
            if (current.children[c - 'a'] == null) {
                current.children[c - 'a'] = new TrieNode();
            }
            current = current.children[c - 'a'];
        }
        current.isEnd = true;
    }

    // Find the shortest root of the word in the trie
    public String shortestRoot(String word) {
        TrieNode current = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (current.children[c - 'a'] == null) {
                // There is not a corresponding root in the trie
                return word;
            }
            current = current.children[c - 'a'];
            if (current.isEnd) {
                return word.substring(0, i + 1);
            }
        }
        // There is not a corresponding root in the trie
        return word;
    }
}