/*  Problem:  
Write a class TempTracker with these methods:
    insert() - records a new temperature
    get_max() - returns the highest temp we&#39;ve seen so far
    get_min() - returns the lowest temp we&#39;ve seen so far
    get_mean() - returns the mean of all temps we&#39;ve seen so far
    get_mode() - returns a mode of all temps we&#39;ve seen so far
    Favour speeding up the getter methods get_max(), get_min(), get_mean(), and get_mode()
    over speeding up the insert() method.
    get_mean() should return a float, but the rest of the getter methods can return integers.
    Temperatures will all be inserted as integers and we can assume they will be in the range 0
    ℃ to 150 ℃.
    If there is more than one mode, return any of the modes.
*/
class TempTracker {
        constructor(){
        this.minTemperature = 0;
        this.maxTemperature = 0;
        this.noOfTemp = 0;
        this.sumOfTemp = 0;
        this.tempObject = {};
        this.highestCount = 0;
    }

    /* All logics of inserting, min , max , mean, mode is implemented in insert method 
     and respective fnctions only return the values as we have to make it efficient.
    */
    
    insert(temp) {
        this.temperature = temp;
        if(!this.minTemperature && !this.maxTemperature) {
            this.maxTemperature = temp;
            this.minTemperature = temp
        } else {
            if(temp > this.maxTemperature)
                this.maxTemperature = temp;
            if(temp < this.minTemperature)
                this.minTemperature = temp;
        }
        

        //Mean calculation 
        this.noOfTemp++;
        this.sumOfTemp += temp;
        this.meanTemperature = this.sumOfTemp / this.noOfTemp;
        //Mode calculation
        this.tempObject[temp] = (this.tempObject[temp] || 0) + 1;       
        for(let item in this.tempObject) {
            if(this.tempObject[item] > this.highestCount) {
                this.modeTemperature = item;
                this.highestCount = this.tempObject[item];
            }
                
            // console.log(item, this.tempObject[item], this.highestCount)
        }
        // console.log(this.tempObject);
        // console.log(this.highestCount, this.modeTemperature);
    }

    get_max() {
        return this.maxTemperature;
    }

    get_min() {
        return this.minTemperature;
    }
    
    get_mean() {
        return this.meanTemperature;
    }

    get_mode() {
        return this.modeTemperature;
    }

}

const tempTracker = new TempTracker();
// tempTracker.insert(1);
// tempTracker.insert(2);
// tempTracker.insert(4);
// tempTracker.insert(1);

tempTracker.insert(1)
tempTracker.insert(2)
tempTracker.insert(1)
tempTracker.insert(4);
tempTracker.insert(4);
tempTracker.insert(4);
tempTracker.insert(1);
tempTracker.insert(3)
console.log('min temperature -> ', tempTracker.get_min());
console.log('max temperature -> ', tempTracker.get_max());
console.log('mean temperature -> ', tempTracker.get_mean());
console.log('mode temperature -> ', tempTracker.get_mode());