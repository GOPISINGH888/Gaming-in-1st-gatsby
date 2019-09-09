{
    gComma": "all",
    "bracketSp "parser": "babel - eslint",
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
        "plugins": [
            "prettier"
        ],
            "rules": {
        "func-names": 0,
            "prettier/prettier": [
                "error",
                {
                    "singleQuote": true,
                    "trailinacing": true,
                    "jsxBracketSameLine": true
                }
            ],
                "react/jsx-filename-extension": [
                    1,
                    {
                        "extensions": [
                            ".js",
                            ".jsx"
                        ]
                    }
                ],
                    "react/prop-types": 0,
                        "no-underscore-dangle": 0,
                            "react/prefer-stateless-function": 0,
                                "react/forbid-prop-types": 0,
                                    "react/no-this-in-sfc": 0,
                                        "import/imports-first": [
                                            "error",
                                            "absolute-first"
                                        ],
                                            "import/newline-after-import": "error",
                                                "jsx-a11y/label-has-associated-control": 0,
                                                    "jsx-a11y/label-has-for": 0,
                                                        "jsx-a11y/anchor-is-valid": [
                                                            "error",
                                                            {
                                                                "components": [
                                                                    "Link"
                                                                ],
                                                                "specialLink": [
                                                                    "to",
                                                                    "onClick"
                                                                ]
                                                            }
                                                        ],
                                                            "jsx-a11y/click-events-have-key-events": 0,
                                                                "jsx-a11y/no-static-element-interactions": 0,
                                                                    "jsx-a11y/accessible-emoji": 0
    },
    "globals": {
        "window": true,
            "document": true,
                "localStorage": true,
                    "FormData": true,
                        "FileReader": true,
                            "Blob": true,
                                "navigator": true,
                                    "it": true
    }
}