JavaScript

Android  - Linux
    NDK - C++ [C++ Runtime]
    Java [Java Runtime]

iOS - Unix
    Objective-C [C/C++-Runtime]
    

Browser
    Layout engine [Render UI]
    JavaScript Engine [Execute JS]
        - FireMonkey - Firefox
        - Chakra - IE
        - V8 - Chrome google
        - JavaScriptCore - Safari - Apple -

Node.js
    Write and Run JS code without browser
    - V8 engine - Google

APK - Android
    + JavaScriptCore [3 MB]
    + Code etc

iOS 
    JavaScriptCore is part of OS

    APP
        + Code 

Normal Java
    Build app using Java
    Compile Java Code [Build Machine]
        Output the class files
            bundle class files into JAR file
                JARs are put into APK file
    APK
        -- DEX file
            JAR 
            Assets [Images, etc]
            Manifest..

        -- Java Runtime [JRE] already built in with OS
            -- Not shipped with apk file.

    When running Java apps in Android,
        it launches JRE
            then run the jar files


Xaramin - .NET
    Build app using C#
    Compile C# Code [Build Machine]
        Output the IL files
            bundle IL files into DLL file
                DLLs are put into APK file

    APK
    -- DEX file
            DLL 
            Assets [Images, etc]
            Manifest..

    -- .NET runtime
         to be included with Android APP


    When running .NET apps in Android,
        it launches .NET Runtime
            then run the dll files


React Native
    Java + JavaScript

    Build app using JavaScript
    Bundle 100 js files into one bundle.js
                Bundle.js are put into APK file

    -- JavaScript Runtime (JavaScriptCore engine)
        to be included with Android APP

    While running react native application,
        - Start the Java JRE
        - Java JRE shall start JavaScript Core 
             JavaScriptCore shall execute bundle.js
    


C/Objective-C Lang - Runtime
    Pointer * ref to memory 
    callstack 


    byte *b = 5; // 1 byte

    int *i = b; // 4 bytes

      byte
        short - 16 bits
        int - 32
        long  - 64
        flaot
        double

Java JRE
    Reference 
        JRE -HEAP

        byte
        short - 16 bits
        int - 32
        long  - 64
        flaot
        double

JavaScript
    Reference 
        number

JSON: JS - Serialized
    """
    {
        "setText" : 10
    }
    """

Send to Java/Object-C
    De-serialize JSON message

    JSValue obj = JacksonKJson.load( """
                    {
                        "setText" : 10
                    }
                    """)

    obj.getText("setText")

Mobile Phones
    ios
    android


# Tough Install

Open Command Prompt

Requirements
Android
    -- JDK 1.8
        JAVA_HOME
    -- Android Studio
        ANDROID_HOME

    - Android SDK (API 16 to API 28)
    Android Emulator
    Virtualization (Bios)

iOS
    - Mac Machine
    - Xcode
    - Simulators
------

# Easy Option

    Expo Cli
    - No SDK required
    - No JDK, XCode nothing required

    Expo App (Android and iOS stores)
        React App runs inside Expo