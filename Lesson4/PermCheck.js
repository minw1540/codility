/**
	A non-empty array A consisting of N integers is given.

	A permutation is a sequence containing each element from 1 to N once, and only once.

	For example, array A such that:

	    A[0] = 4
	    A[1] = 1
	    A[2] = 3
	    A[3] = 2
	is a permutation, but array A such that:

	    A[0] = 4
	    A[1] = 1
	    A[2] = 3
	is not a permutation, because value 2 is missing.

	The goal is to check whether array A is a permutation.

	Write a function:

	int solution(int A[], int N);

	that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

	For example, given array A such that:

	    A[0] = 4
	    A[1] = 1
	    A[2] = 3
	    A[3] = 2
	the function should return 1.

	Given array A such that:

	    A[0] = 4
	    A[1] = 1
	    A[2] = 3
	the function should return 0.

	Write an efficient algorithm for the following assumptions:

	N is an integer within the range [1..100,000];
	each element of array A is an integer within the range [1..1,000,000,000].
 */


(function () {
	let A = [9, 5, 7, 3, 2, 7, 3, 1, 10, 8];
	console.log(test(A));
})();

function test(A) {

	let sortArray = A.sort();

	if(sortArray[0] > 1 || sortArray[sortArray.length - 1] > sortArray.length){
		return 0;
	}

	let ariNum = sortArray.length;
	let totalSum = sortArray.reduce((aa, bb) => { return aa + bb; });
	let ariSum = (1 + ariNum)/2 * ariNum;

	return totalSum === ariSum ? 1 : 0;
}
