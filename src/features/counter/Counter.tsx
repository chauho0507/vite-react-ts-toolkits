import { useState } from "react"
import { useAppSelector, useAppDispatch } from "@hooks/hooks"
import { decrement, increment, incrementByAmount } from "./counterSlice"
import { getLocalStorage } from "@utils/helper"

export function Counter() {
  // const count = useAppSelector()
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")
  const demo = getLocalStorage("ahihi") ?? "ahihi"

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div>
        <span>{0}</span>
        <h1 className="text-red-500">ahihi do ngok</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button>Add Async</button>
        <button onClick={() => {}}>Add If Odd</button>
      </div>
    </div>
  )
}
