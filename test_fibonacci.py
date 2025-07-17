import unittest
from test import fibonacci


class TestFibonacci(unittest.TestCase):
    
    def test_fibonacci_base_cases(self):
        """Test base cases for fibonacci function"""
        self.assertEqual(fibonacci(0), 0)
        self.assertEqual(fibonacci(1), 1)
    
    def test_fibonacci_negative_numbers(self):
        """Test fibonacci with negative numbers"""
        self.assertEqual(fibonacci(-1), 0)
        self.assertEqual(fibonacci(-5), 0)
        self.assertEqual(fibonacci(-10), 0)
    
    def test_fibonacci_small_positive_numbers(self):
        """Test fibonacci with small positive numbers"""
        self.assertEqual(fibonacci(2), 1)
        self.assertEqual(fibonacci(3), 2)
        self.assertEqual(fibonacci(4), 3)
        self.assertEqual(fibonacci(5), 5)
    
    def test_fibonacci_known_sequence_values(self):
        """Test fibonacci with known sequence values"""
        # Known fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
        expected_values = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        for i, expected in enumerate(expected_values):
            with self.subTest(n=i):
                self.assertEqual(fibonacci(i), expected)
    
    def test_fibonacci_larger_numbers(self):
        """Test fibonacci with larger numbers"""
        self.assertEqual(fibonacci(10), 55)
        self.assertEqual(fibonacci(12), 144)
        self.assertEqual(fibonacci(15), 610)
    
    def test_fibonacci_return_type(self):
        """Test that fibonacci returns integers"""
        result = fibonacci(5)
        self.assertIsInstance(result, int)
        
    def test_fibonacci_non_negative_results(self):
        """Test that fibonacci always returns non-negative results"""
        for i in range(-5, 16):
            with self.subTest(n=i):
                result = fibonacci(i)
                self.assertGreaterEqual(result, 0)


if __name__ == '__main__':
    # Run tests with verbose output
    unittest.main(verbosity=2)