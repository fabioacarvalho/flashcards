class Card():
    def __init__(self, lastLevel, front, back, content, picture, daysLastView, study, updatedAt, nextView):
        self.__lastLevel = lastLevel
        self.__front = front
        self.__back = back
        self.__content = content
        self.__picture = picture
        self.__daysLastView = daysLastView
        self.__study = study
        self.__updatedAt = updatedAt
        self.__nextView = nextView
    
    @property
    def lastLevel(self):
        return self.__lastLevel
    
    @property
    def front(self):
        return self.__front
    
    @property
    def back(self):
        return self.__back
    
    @property
    def content(self):
        return self.__content
    
    @property
    def picture(self):
        return self.__picture
    
    @property
    def daysLastView(self):
        return self.__daysLastView
    
    @property
    def study(self):
        return self.__study
    
    @property
    def updatedAt(self):
        return self.__updatedAt
    
    @property
    def nextView(self):
        return self.__nextView
    
    @lastLevel.setter
    def lastLevel(self, lastLevel):
        self.__lastLevel = lastLevel
    
    @front.setter
    def front(self, front):
        self.__front = front
    
    @back.setter
    def back(self, back):
        self.__back = back
    
    @content.setter
    def content(self, content):
        self.__content = content
    
    @picture.setter
    def picture(self, picture):
        self.__picture = picture
    
    @daysLastView.setter
    def daysLastView(self, daysLastView):
        self.__daysLastView = daysLastView
    
    @study.setter
    def study(self, study):
        self.__study = study
    
    @updatedAt.setter
    def updatedAt(self, updatedAt):
        self.__updatedAt = updatedAt
    
    @nextView.setter
    def nextView(self, nextView):
        self.__nextView = nextView
