import pandas as pd

PATH = "🌴London🌴Lisbon '23 Payments  - LONDON.csv"

df = pd.read_csv(PATH)
print(df.columns)
NAMES = ['Bill','Andrew','Pat','Stan','Phil']
def nameCheck(name): return name in NAMES

def totalSpent(name):
    if not nameCheck(name): return False
    return round(df[name].dropna().sum(),3)

def totalPayed(name):
    if not nameCheck(name): return False
    return round(df.loc[df['Payer'] == name][NAMES].sum().dropna().sum(),3)

def totalOwed(name): return totalPayed(name) - totalSpent(name)
# %%
runningSpent, runningPayed = 0, 0
for name in NAMES:
    print("{}: [spent: {}, paid for: {}]".format(
        name, totalSpent(name), totalPayed(name)))
    runningSpent += totalSpent(name)
    runningPayed += totalPayed(name)
    
print("Total: [spent: {}, paid for: {}]".format(runningSpent, runningPayed))