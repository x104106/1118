input.onGesture(Gesture.LogoUp, function () {
    if (頁面 == 2) {
        radio.sendNumber(2)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (頁面 == 3) {
        radio.sendNumber(3)
    }
})
input.onButtonPressed(Button.A, function () {
    if (頁面 == 1) {
        radio.sendNumber(5)
    }
})
function 循線 () {
    // 白線上
    // 停下來
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.stop(BBStopMode.Brake)
        // 開始計時
        開始時間 = input.runningTime()
        // 在黑線上
        while (!(bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1 && input.runningTime() - 開始時間 <= 400 || input.runningTime() - 開始時間 > 400)) {
            bitbot.rotate(BBRobotDirection.Right, 30)
        }
        bitbot.stop(BBStopMode.Brake)
        結束時間 = input.runningTime() - 開始時間
        // 右邊
        if (input.runningTime() - 開始時間 <= 400) {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 || bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Right, 15)
            }
        } else {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 || bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Left, 15)
            }
        }
    }
    // 黑線上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotate(BBRobotDirection.Left, 15)
    }
    // 黑線上
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 15)
    }
    // 黑線上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 60)
    }
}
input.onGesture(Gesture.Shake, function () {
    if (頁面 == 1) {
        radio.sendNumber(6)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    if (頁面 == 2) {
        radio.sendNumber(7)
    }
})
function 距離循線 () {
    循線()
    if (bitbot.sonar(BBPingUnit.Centimeters) <= 10) {
        bitbot.stop(BBStopMode.Coast)
    } else {
        循線()
    }
}
input.onGesture(Gesture.LogoDown, function () {
    if (頁面 == 1) {
        radio.sendNumber(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (頁面 < 5) {
        頁面 += 1
        basic.showNumber(頁面)
    } else {
        頁面 = 1
        basic.showNumber(頁面)
    }
})
input.onButtonPressed(Button.B, function () {
    if (頁面 == 2) {
        radio.sendNumber(8)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (頁面 == 4) {
        radio.sendNumber(4)
    }
})
let 結束時間 = 0
let 開始時間 = 0
let 頁面 = 0
radio.setGroup(4)
頁面 = 1
basic.showNumber(頁面)
basic.forever(function () {
	
})
