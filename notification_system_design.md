stage-1:

this project implements a priority inbox that displays the top 10 most important notifications from the given api.
notifications are prioritized based on their type:
placement → highest priority
result → medium priority
event → lowest priority
each notification is assigned a weight and combined with its timestamp so that newer notifications appear first within the same category.

steps followed:
1. fetch notifications from the api.
2. assign priority based on notification type.
3. sort notifications using priority and timestamp.
4. select the top 10 notifications.
5. display them in the priority inbox.

complexity:
time complexity: o(n log n)
space complexity: o(n)

future improvement:
for a large number of notifications, a min heap (priority queue) can be used to efficiently maintain the top 10 notifications.

conclusion:
the system successfully fetches notifications, ranks them based on importance and recency, and displays the 10 most relevant notifications to the user.