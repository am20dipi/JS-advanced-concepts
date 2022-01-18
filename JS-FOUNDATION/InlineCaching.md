# Inline Caching

In simple terms inline caching relies upon the observation that repeated calls to the same method tend to occur on the same type of object.

V8 maintains a cache of the type of objects that were passed as a parameter in recent method calls, and uses that information to make an assumption about the type of object that will be passed as a parameter in the future.

If V8 is able to make a good assumption about the type of object that will be passed to a method, it can bypass the process of figuring out how to access the objects properties, and instead use the stored information from previous lookups to the objects hidden class.