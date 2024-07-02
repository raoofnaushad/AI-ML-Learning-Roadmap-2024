'''
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
'''

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        res = defaultdict(list) ## counters to [list of anagrams]

        for s in strs:
            count = [0] * 26 # a to z
            for c in s:
                count[ord(c) - ord('a')] += 1
            
            res[tuple(count)].append(s)
        print(res)

        return res.values()


        # SortedInputs = {} ## sorted_string : [list of strings]
        # for each in strs:
        #     sorted_each = ''.join(sorted(each))
        #     print(sorted_each)
        #     if sorted_each in SortedInputs:
        #         SortedInputs[sorted_each].append(each)
        #     else:
        #         SortedInputs[sorted_each] = [each]
        
        # result = [each for _, each in SortedInputs.items()]
        # print(result)
        # return result
        # # return 
