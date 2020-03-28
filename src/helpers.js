export function escapeHtml (unsafe) {
    const unsafeCharacters = [
        { char: "\r\n", unicode: "<br />" },
        { char: "\n", unicode: "<br />" },
        { char: "\\\\", unicode: '' },
        { char: "&", unicode: "&amp;" },
        { char: '"', unicode: "&quot;" },
        { char: '“', unicode: "&quot;" },
        { char: '”', unicode: "&quot;" },
        { char: "'", unicode: "&#039;" },
        { char: "«", unicode: "&#171;" },
        { char: "»", unicode: "&#187;" },
        { char: '„', unicode: "&quot;" },
        { char: '	', unicode: ' ' }
    ];

    return unsafeCharacters.reduce((acc, { char, unicode }) => {
        return acc.replace(new RegExp(char, "g"), unicode);
    }, unsafe);
}
