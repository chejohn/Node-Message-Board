import unittest
from test import fibonacci


class TestFibonacci(unittest.TestCase):
    
    def test_fibonacci_zero(self):
        """Test fibonacci(0) returns 0"""
        self.assertEqual(fibonacci(0), 0)
    
    def test_fibonacci_negative(self):
        """Test fibonacci with negative numbers returns 0"""
        self.assertEqual(fibonacci(-1), 0)
        self.assertEqual(fibonacci(-5), 0)
        self.assertEqual(fibonacci(-10), 0)
    
    def test_fibonacci_one(self):
        """Test fibonacci(1) returns 1"""
        self.assertEqual(fibonacci(1), 1)
    
    def test_fibonacci_two(self):
        """Test fibonacci(2) returns 1"""
        self.assertEqual(fibonacci(2), 1)
    
    def test_fibonacci_sequence(self):
        """Test fibonacci sequence for known values"""
        # Testing known fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
        expected_values = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        
        for i, expected in enumerate(expected_values):
            with self.subTest(n=i):
                self.assertEqual(fibonacci(i), expected)
    
    def test_fibonacci_larger_values(self):
        """Test fibonacci for some larger values"""
        self.assertEqual(fibonacci(12), 144)
        self.assertEqual(fibonacci(15), 610)
    
    def test_fibonacci_type(self):
        """Test that fibonacci returns integer type"""
        self.assertIsInstance(fibonacci(5), int)
        self.assertIsInstance(fibonacci(0), int)
        self.assertIsInstance(fibonacci(1), int)


if __name__ == '__main__':
    unittest.main()