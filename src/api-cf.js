export default {
    async fetch(request, env) {
      return Response.redirect("https://apifox.com/apidoc/shared-5e64d62e-c442-4b51-b676-4bed9e4502e1/doc-3391061")
        const api_cf = {
            Translation: {
                url: "https://api-cf.ewlgc.top/ai/translation",
                document: {
                    about: {
                        main: "M2M100 is a multilingual encoder-decoder (seq-to-seq) model trained for Many-to-Many multilingual translation.",
                        Task: "Translation",
                        License_type: "MIT"
                    },
                    usage: {
                        Request_Method: "Post",
                        text: "Original text waiting for translation",
                        source_lang: "Original text language calibration",
                        target_lang: "Target Text Language Calibration",
                        Supported_languages: ["english",
                            "chinese",
                            "french",
                            "spanish",
                            "arabic",
                            "russian",
                            "german",
                            "japanese",
                            "portuguese",
                            "hindi"]
                    },
                    Body_Example: {
                        inputs: JSON.parse("{\"text\":\"Tell me a joke about apple \",\"source_lang\":\"en\",\"target_lang\":\"zh\"}"),
                    }
                }
            },
            text_classification: {
                url: "https://api-cf.ewlgc.top/ai/text-categorization",
                document: {
                    about: {
                        main: "Quantized DistilBERT model finetuned for sentiment-analysis",
                        Task: "text-classification",
                        License_type: "Apache 2.0"
                    },
                    usage: {
                        Request_Method: "Post",
                        Request_Body: "Text waiting to analyze emotional colors"
                    },
                    Body_Example: "i hate you "
                }
            },
            text_generation: {
                url: "https://api-cf.ewlgc.top/ai/chat",
                document: {
                    about: {
                        main: "Llama 2 is a family of generative text models and can be adapted for a variety of natural language generation tasks.",
                        Task: "text-generation",
                        License_type: "Source Available"
                    },
                    usage: {
                        Request_Method: "Post",
                        Request_Body: {
                            "messages": [
                                {
                                    "role": "system",
                                    "content": "You are a friendly assistant"
                                },
                                {
                                    "role": "user",
                                    "content": "user content"
                                }
                            ]
                        }
                    }
                }
            }
        };
        return Response.json({ api_cf });
    }
  }