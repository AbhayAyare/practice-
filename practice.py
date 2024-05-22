import numpy as np
import matplotlib.pyplot as plt

# Original signal
x = [1, 1, 1, 1, 1, 1/2]

# Signals
signals = [
    ("x[4-n]", [x[4 - n] if 0 <= 4 - n < len(x) else 0 for n in range(len(x))]),
    ("x[2n+1]", [x[2 * n + 1] if 0 <= 2 * n + 1 < len(x) else 0 for n in range(len(x) // 2)]),
    ("x[n] u[2-n]", [x[n] if n >= 2 else 0 for n in range(len(x))]),
    ("x[n-1] δ[n-3]", [x[n-1] if n == 3 else 0 for n in range(len(x))])
]

# Plotting
plt.figure(figsize=(12, 8))
for i, (label, signal) in enumerate(signals, 1):
    plt.subplot(2, 2, i)
    plt.stem(signal)
    plt.title(label)
    plt.xlabel("n")
    plt.ylabel("Amplitude")
plt.tight_layout()
plt.show()
