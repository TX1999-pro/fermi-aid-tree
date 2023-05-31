# Experiment 3 log

## Question to explore
1. how much difference on the estimation accuracy would prompt design make ?

## Goal / Objectives:
1. collate a mixture of questions from SOINC, Eric, and Allen realFP database （100 entries）
    1. for Allen realFP, we select questions with links >=4
    2. for SOINC and Eric question, we select questions that are not simply unit conversion
    3. plot answer value log distribution
2. perform a sweep search from  10^(-10) to 10^10 for the 100 entries
3. use the 'better' designed prompt for model inferences => compare GPT3.5 and GPT4 answer
    1. first test GPT4 in a small scale, see complaince
    2. investigate the trade-off between accuracy, inference time, and token cost

