import {research_data} from "./research.js";

let example_data = new research_data("98% of men want to be dominated by shinjiku arc maki", "sir devenilla", "nano", null, new Date(), null);

const list = [example_data, example_data, example_data, example_data, example_data, example_data,
    example_data, example_data, example_data, example_data, example_data, example_data,
    example_data, example_data, example_data, example_data, example_data, example_data,
    example_data, example_data, example_data, example_data, example_data, example_data, example_data, example_data, example_data, example_data, example_data, example_data
];

create_grid(list);

function create_grid(researchData)
{
    const researchGrid = document.querySelector('.research-grid');

// Assuming you have an array named 'researchData' containing your research_data objects

    researchData.forEach(item => {
        const researchItem = document.createElement('div');
        researchItem.classList.add('research-item');

        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');
        br1.classList.add('item-br');
        br2.classList.add('item-br');
        br3.classList.add('item-br');

        const thumbnail = document.createElement('img');
        thumbnail.classList.add('object');
        if (item.thumbnail == null)
        {
            thumbnail.src = "../assets/example_thumbnail.png"
        }
        else
        {
            thumbnail.src = item.thumbnail;
        }

        const titleLabel = document.createElement('span');
        titleLabel.textContent = item.title + "\n";
        titleLabel.classList.add('title');


        const authorLabel = document.createElement('span');
        authorLabel.textContent = "made by " + item.author + "\n";
        authorLabel.classList.add('author');

        const dateLabel = document.createElement('span');
        dateLabel.textContent = "created " + get_relative_date(item.date);
        dateLabel.classList.add('date');

        researchItem.appendChild(thumbnail);
        researchItem.appendChild(br1);
        researchItem.appendChild(titleLabel);
        researchItem.appendChild(br2);
        researchItem.appendChild(authorLabel);
        researchItem.appendChild(br3);
        researchItem.appendChild(dateLabel);

        researchGrid.appendChild(researchItem);
    });
}

function get_relative_date(dateString)
{
    // Parse the date string
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date; // Difference in milliseconds
    const diffSec = Math.round(diffMs / 1000); // Difference in seconds
    const diffMin = diffSec / 60; // Difference in minutes
    const diffHour = diffMin / 60; // Difference in hours
    const diffDay = diffHour / 60; // Difference in hours

    // Format the date based on the difference
    if (diffSec < 1) {
        return 'right now';
    } else if (diffMin < 1) {
        return `${diffSec} sec. ago`;
    } else if (diffHour < 1) {
        return `${diffMin} min. ago`;
    } else if (diffDay < 1) {
        return `${diffHour} hours. ago`;
    } else {
        // Format the date as DD/MM/YYYY
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-based
        const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
        return `${day}/${month}/${year}`;
    }
}
