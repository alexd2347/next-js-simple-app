export const getArmeria = async (startDate, endDate) => {
    console.log(startDate, endDate);
    const response = await fetch(`http://10.1.3.12:3001/api/v1/checkinConsulta?checkin=${startDate}&checkout=${endDate}`);
    const data = await response.json();
    return data;
}
