function checkTemp(temp) {
if (0 <= temp && temp <= 20) return -1;
else if (21 <= temp && temp <= 40) return 0; 
else if (41 <= temp && temp <= 60) return 1;
}

