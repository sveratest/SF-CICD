module.exports = {
    branches: ['main'],
    tagFormat: 'v${version}',
    plugins:[
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        [
            '@semantic-release/github',
            {
                successComment: false,
                failComment: false,
            },
        ],
        [
            '@semantic-release/git',
            {
                message: 'chore(release): ${nextRelease.gitTag} [skip ci]',
            }
        ]
    ]
};